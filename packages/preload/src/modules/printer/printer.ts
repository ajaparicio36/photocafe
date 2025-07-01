import printer from "pdf-to-printer";

export const getPrintersList = async () => {
  const printers = await printer.getPrinters();
  return printers;
};
