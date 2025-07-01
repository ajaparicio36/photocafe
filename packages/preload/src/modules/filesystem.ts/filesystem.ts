export const saveToTmpFile = async (
  data: string | Buffer,
  extension: string
): Promise<string> => {
  // Dynamic import to avoid loading fs at module level
  const fsPromises = (await import("fs/promises")).default;
  const tmpDir = "/tmp";
  const fileName = `photocafe-${Date.now()}.${extension}`;
  const filePath = `${tmpDir}/${fileName}`;

  await fsPromises.writeFile(filePath, data);
  return filePath;
};
