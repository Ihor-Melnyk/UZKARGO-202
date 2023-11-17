function setTopicDocument() {
  debugger;
  var ClaimKind = EdocsApi.getAttributeValue("ClaimKind").text;
  var SaveCargoFailureType = EdocsApi.getAttributeValue(
    "SaveCargoFailureType"
  ).text;
  var RailwayConnectionType = EdocsApi.getAttributeValue(
    "RailwayConnectionType"
  ).value;
  var TopicDocument = EdocsApi.getAttributeValue("TopicDocument");

  switch (ClaimKind) {
    case "Недотримання терміну доставки вантажу":
      switch (RailwayConnectionType) {
        case "Внутрішнє":
          TopicDocument.value = 1;
          break;
        case "Міжнародне":
          TopicDocument.value = 2;
          break;
      }
      break;

    case "Незбережене перевезення вантажу":
      switch (SaveCargoFailureType) {
        case "Втрата вантажу":
          switch (RailwayConnectionType) {
            case "Внутрішнє":
              TopicDocument.value = 3;
              break;
            case "Міжнародне":
              TopicDocument.value = 4;
              break;
          }
          break;

        case "Недостача вантажу":
          switch (RailwayConnectionType) {
            case "Внутрішнє":
              TopicDocument.value = 5;
              break;
            case "Міжнародне":
              TopicDocument.value = 6;
              break;
          }
          break;

        case "Псування вантажу":
          switch (RailwayConnectionType) {
            case "Внутрішнє":
              TopicDocument.value = 7;
              break;
            case "Міжнародне":
              TopicDocument.value = 8;
              break;
          }
          break;

        case "Пошкодження вантажу":
          switch (RailwayConnectionType) {
            case "Внутрішнє":
              TopicDocument.value = 9;
              break;
            case "Міжнародне":
              TopicDocument.value = 10;
              break;
          }
          break;
      }
      break;

    case "Некоректне нарахування за перевезення вантажу та надані послуги":
      switch (RailwayConnectionType) {
        case "Внутрішнє":
          TopicDocument.value = 11;
          break;
        case "Міжнародне":
          TopicDocument.value = 12;
          break;
      }
      break;

    case "Інше":
      switch (RailwayConnectionType) {
        case "Внутрішнє":
          TopicDocument.value = 13;
          break;
        case "Міжнародне":
          TopicDocument.value = 14;
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

function onChangeClaimKind() {
  setTopicDocument();
}

function onChangeSaveCargoFailureType() {
  setTopicDocument();
}

function onChangeRailwayConnectionType() {
  setTopicDocument();
}
