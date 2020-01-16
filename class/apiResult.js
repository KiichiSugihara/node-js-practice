class ApiResultData {
  constructor() {
    this.result;
    this.errorMessage;
    this.userName;
    this.age;
  }
}

function parseData(response) {
  const apiResultData = new ApiResultData();

  apiResultData.result = response.result;
  apiResultData.errorMessage = response.error_message;
  apiResultData.userName = response.user_name;
  apiResultData.age = response.age;

  console.log(`${apiResultData.userName} / ${apiResultData.age}歳`);
}

const apiResponse = {
  result: true,
  user_name: '太郎',
  age: 24
};

parseData(apiResponse);
