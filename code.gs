// Fungsi ini wajib ada agar URL Web App bisa menampilkan file HTML
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('外国人申し込み')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Fungsi untuk menerima kiriman data dari Form HTML ke Sheets
function tambahData(nama, visa) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1"); // Pastikan nama sheet di bawah beneran "Sheet1"
  
  // Menambah baris baru sesuai inputan
  sheet.appendRow([nama, visa, new Date()]); 
  
  return "Sukses";
}
