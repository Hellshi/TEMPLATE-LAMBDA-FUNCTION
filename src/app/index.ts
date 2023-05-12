//@ts-ignore
import moment from 'moment'
// TODO: move to layers should be the last thing you will do
export const handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Go Serverless v3.0! Your function executed successfully!',
          input: moment().format(),
        },
        null,
        2
      ),
    };
  };
  