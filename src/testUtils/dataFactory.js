import faker from "faker";
import * as d3 from "d3";

const createInteger = ({ min, max }) => faker.random.number({ min, max });
const createName = ({ gen }) =>
  `gen-${gen} ${faker.name.firstName()} ${faker.name.lastName()}`;
const createPersonObject = ({ name = "", parentName = "" }) => ({
  name,
  parentName
});
const createGeneration = ({
  parentGeneration = [],
  qty = 2,
  generationNumber = 0
}) => {
  const generation = [];
  for (let i = 0; i < qty; i++) {
    const parentIndex = createInteger({
      min: 0,
      max: parentGeneration.length - 1
    });
    const parentName = parentGeneration[parentIndex].name;
    generation.push(
      createPersonObject({
        name: createName({ gen: generationNumber }),
        parentName
      })
    );
  }

  return generation;
};

const createPopulation = ({
  generationQty = 3,
  minGenerationPopulation = 1,
  maxGenerationPopulation = 4
}) => {
  const generations = [];
  for (let i = 0; i < generationQty; i++) {
    if (i === 0)
      generations.push([createPersonObject({ name: createName({ gen: 0 }) })]);
    else {
      const generationPopulation = createInteger({
        min: minGenerationPopulation,
        max: maxGenerationPopulation
      });
      generations.push(
        createGeneration({
          parentGeneration: generations[i - 1],
          qty: generationPopulation,
          generationNumber: i
        })
      );
    }
  }

  const population = generations.reduce((a, c) => {
    a.push(...c);
    return a;
  }, []);

  return population;
};

const population = createPopulation({
  generationQty: 4,
  minGenerationPopulation: 1,
  maxGenerationPopulation: 2
});

const createHierarchy = population =>
  d3
    .stratify()
    .id(d => d.name)
    .parentId(d => d.parentName)(population);

const hierarchy = createHierarchy(population);

export default {
  createHierarchy
};
