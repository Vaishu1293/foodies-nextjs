import fs from 'fs/promises';
import path from 'path';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
    // Slugify the title
    meal.slug = slugify(meal.title, { lower: true });

    // Sanitize instructions
    meal.instructions = xss(meal.instructions);

    // Generate file name and path
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;
    const filePath = path.join(process.cwd(), 'public/images', fileName);

    // Convert image to buffer
    const bufferedImage = Buffer.from(await meal.image.arrayBuffer());

    // Save image to file system
    try {
        await fs.writeFile(filePath, bufferedImage);
    } catch (error) {
        throw new Error(`Failed to save image: ${error.message}`);
    }

    // Update meal image path
    meal.image = `/images/${fileName}`;

    // Insert meal into the database
    try {
        db.prepare(`
            INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
            VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
        `).run(meal);
    } catch (error) {
        throw new Error(`Failed to save meal to database: ${error.message}`);
    }
}

