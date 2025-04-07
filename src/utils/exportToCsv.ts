export const exportToCsv = (filename: string, rows: any[]) => {
    if (!rows.length) return;

    const headers = Object.keys(rows[0]);
    const escapeCSV = (value: any) =>
        `"${String(value).replace(/"/g, '""')}"`;

    const csv = [
        headers.join(","),
        ...rows.map(row =>
            headers.map(field => escapeCSV(row[field])).join(",")
        ),
    ].join("\r\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", filename);
    link.click();
};
