function setTopicDocument() {
  debugger;
  var ClaimKind = EdocsApi.getAttributeValue("ClaimKind").text;
  var SaveCargoFailureType = EdocsApi.getAttributeValue("SaveCargoFailureType").text;
  var RailwayConnectionType = EdocsApi.getAttributeValue("RailwayConnectionType").value;
  var TopicDocument = EdocsApi.getAttributeValue("TopicDocument");

  switch (ClaimKind) {
    case "Недотримання терміну доставки вантажу":
      switch (RailwayConnectionType) {
        case "Внутрішнє":
          TopicDocument.value = 1;
          TopicDocument.text = "Просрочка/ В";
          break;
        case "Міжнародне":
          TopicDocument.value = 2;
          TopicDocument.text = "Просрочка/М";
          break;
      }
      break;

    case "Незбережене перевезення вантажу":
      switch (SaveCargoFailureType) {
        case "Втрата вантажу":
          switch (RailwayConnectionType) {
            case "Внутрішнє":
              TopicDocument.value = 3;
              TopicDocument.text = "Втрата/В";
              break;
            case "Міжнародне":
              TopicDocument.value = 4;
              TopicDocument.text = "Втрата/М";
              break;
          }
          break;

        case "Недостача вантажу":
          switch (RailwayConnectionType) {
            case "Внутрішнє":
              TopicDocument.value = 5;
              TopicDocument.text = "Нестача/В";
              break;
            case "Міжнародне":
              TopicDocument.value = 6;
              TopicDocument.text = "Нестача/M";
              break;
          }
          break;

        case "Псування вантажу":
          switch (RailwayConnectionType) {
            case "Внутрішнє":
              TopicDocument.value = 7;
              TopicDocument.text = "Псування/В";
              break;
            case "Міжнародне":
              TopicDocument.value = 8;
              TopicDocument.text = "Псування/М";
              break;
          }
          break;

        case "Пошкодження вантажу":
          switch (RailwayConnectionType) {
            case "Внутрішнє":
              TopicDocument.value = 9;
              TopicDocument.text = "Пошкодження/В";
              break;
            case "Міжнародне":
              TopicDocument.value = 10;
              TopicDocument.text = "Пошкодження/М";
              break;
          }
          break;
      }
      break;

    case "Некоректне нарахування за перевезення вантажу та надані послуги":
      switch (RailwayConnectionType) {
        case "Внутрішнє":
          TopicDocument.value = 11;
          TopicDocument.text = "Некоректне нарахування/В";
          break;
        case "Міжнародне":
          TopicDocument.value = 12;
          TopicDocument.text = "Некоректне нарахування/М";
          break;
      }
      break;

    case "Інше":
      switch (RailwayConnectionType) {
        case "Внутрішнє":
          TopicDocument.value = 13;
          TopicDocument.text = "Інше/В";
          break;
        case "Міжнародне":
          TopicDocument.value = 14;
          TopicDocument.text = "Інше/М";
          break;
      }

      break;

    default:
      TopicDocument.value = null;
      TopicDocument.text = null;
      break;
  }
  EdocsApi.setAttributeValue(TopicDocument);
}
