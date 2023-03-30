faker = require("faker");

function createData(date, project, task, person, hours) {
  return { date, project, task, person, hours };
}

const capitalize = (string) => {
  const firstLetter = string.charAt(0).toUpperCase();
  return firstLetter + string.slice(1);
};

function generateProjects() {
  const data = [];

  for (i = 0; i < 177; i++) {
    data.push(
      createData(
        {
          date: faker.date
            .between("2017-01-01T00:00:00.000Z", "2023-01-01T00:00:00.000Z")
            .toISOString(),
        },
        {
          project: capitalize(faker.commerce.productAdjective()),
          description: faker.commerce.productDescription(),
        },
        { task: capitalize(faker.random.words(2)) },
        {
          person: faker.name.findName(),
          avatar: faker.image.abstract(),
        },
        { hours: Number.parseInt(faker.datatype.number({ max: 60000 })) }
      )
    );
  }

  return { projects: data };
}

module.exports = generateProjects;
