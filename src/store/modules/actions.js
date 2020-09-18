export default {
    async test(ctx) {
        const url = 'http://localhost:8080/event';
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              console.log(data);
              //ctx.commit('renderCategories', data);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      },
      async addEvent(ctx, input) {
        console.log(input)
        const url = 'http://localhost:8080/event';
        fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(input)
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      },
}