// TODO: move to layers should be the last thing you will do
module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Go Serverless v3.0! Your function executed successfully!',
          input: "moment",
        },
        null,
        2
      ),
    };
  };
  