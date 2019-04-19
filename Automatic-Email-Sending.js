function myFunction() {
  
  var today = new Date();
  var fila = 1;
  
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);
  
  do {
    var fila = fila + 1;
    var celda = "B" + fila;
    var celdaconcepto = "C" + fila;
    var celdamail = "D" + fila;
    var fechavencimiento = SpreadsheetApp.getActiveSheet().getRange(celda).getValue();
    var concepto = SpreadsheetApp.getActiveSheet().getRange(celdaconcepto).getValue();
    //var importe = SpreadsheetApp.getActiveSheet().getRange(celdaimporte).getValue();
    var cantdiasantes = 0 // 0 dias antes del vto yo quiero que me mande mail
    var cantsegundosantes = 86400000 * cantdiasantes
    var result = fechavencimiento - today
    
    
    if (result == cantsegundosantes && today.getDay() == fechavencimiento.getDay() && fechavencimiento != "") {
      var fechavencimiento2 = new Date(fechavencimiento);
      var fechavencimientolinda = fechavencimiento2.getDate() + "/" + (fechavencimiento2.getMonth() +1) + "/" + fechavencimiento2.getFullYear();
      var emailaddress = SpreadsheetApp.getActiveSheet().getRange(celdamail).getValue();
      var message = "" //agregar la etiqueta entera de body del html dentro de las comillas para que se envie un mail con formato!
      var subject = concepto
      MailApp.sendEmail(emailaddress, subject, message, {htmlBody: message})
      //MailApp.sendEmail(emailaddress, subject, message)
    }
    
    
  } while (fechavencimiento != "")
}