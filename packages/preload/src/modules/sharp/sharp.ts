import { saveToTmpFile } from "../filesystem.ts/filesystem.js";

export const convertToPng = async (buffer: Uint8Array) => {
  try {
    // Try to import sharp from the unpacked location first
    const sharp = (await import("sharp")).default;
    const convertedBuffer = Buffer.from(buffer);
    const image = await sharp(convertedBuffer).png().toBuffer();
    return saveToTmpFile(image, "png");
  } catch (error: any) {
    console.error("Sharp import failed:", error);
    throw new Error(`Failed to load sharp: ${error.message}`);
  }
};
