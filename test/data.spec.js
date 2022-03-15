//teste função sort/ordenar filmes
import { filmOrder, filterFemale, filterMale, filterNA, filterMovie, porc } from '../src/data.js';


describe("filmOrder ordena uma lista de filmes", () => {
  it("deve ordenar os filmes de A a Z", () => {
    const naoOrdenado = [
      { title: "The Cat Returns" },
      { title: "Castle in the Sky" },
      { title: "Porco Rosso" },
    ]
    const select = "A-Z"
    const ordenado = filmOrder(naoOrdenado, select);

    expect(ordenado[0].title).toBe("Castle in the Sky");
  })

  it("deve ordenar os filmes de Z a A", () => {
    const naoOrdenado = [
      { title: "Castle in the Sky" },
      { title: "The Cat Returns" },
      { title: "Porco Rosso" },
    ]
    const select = "Z-A"
    const ordenado = filmOrder(naoOrdenado, select);
  
    expect(ordenado[0].title).toBe("The Cat Returns");
  })

  it("deve ordenar os filmes mais velhos", () => {
    const naoOrdenado = [
      { release_date: "2002" },
      { release_date: "1992" },
      { release_date: "2001" }
    ]
    const select = "older"
    const ordenado = filmOrder(naoOrdenado, select);

    expect(ordenado[0].release_date).toBe("1992");
  })
  
  it("deve ordenar os filmes mais novos", () => {
    const naoOrdenado = [
      { release_date: "1992" },
      { release_date: "2002" },
      { release_date: "2001" },
    ]
    const select = "newer"
    const ordenado = filmOrder(naoOrdenado, select);

    expect(ordenado[0].release_date).toBe("2002");
  })
  
  it("deve ordenar os filmes mais avaliados", () => {
    const naoOrdenado = [
      { rt_score: "89" },
      { rt_score: "95" },
      { rt_score: "94" },
    ]
    const select = "score"
    const ordenado = filmOrder(naoOrdenado, select);

    expect(ordenado[0].rt_score).toBe("95");
  })
  
  it("deve ordenar os filmes menos avaliados", () => {
    const naoOrdenado = [
      { rt_score: "89" },
      { rt_score: "95" },
      { rt_score: "41" },
    ]
    const select = "lowerscore"
    const ordenado = filmOrder(naoOrdenado, select);

    expect(ordenado[0].rt_score).toBe("41");
  })

  it("deve retornar todos os filmes se nenhum filtro for selecionado", () => {
    const naoOrdenado = [
      { rt_score: "89" },
      { rt_score: "95" },
      { rt_score: "41" },
    ]
    const select = ""
    const ordenado = filmOrder(naoOrdenado, select);

    expect(ordenado).toEqual(ordenado);
  })
});

describe("filtrar personagens por gênero", () => {
  it("deve filtrar apenas os personagens femininos", () => {
    const personagens = [
      {
        id: 1,
        gender: "Male",
      },
      {
        id: 2,
        gender: "Male",
      },
      {
        id: 3,
        gender: "Male",
      },
      {
        id: 4,
        gender: "Female",
      },
      {
        id: 5,
        gender: "Male",
      },
    ];

    const filtrado = filterFemale(personagens);

    expect(filtrado).toEqual([
      {
        id: 4,
        gender: "Female"
      }
    ]);
  });

  it("deve filtrar apenas os personagens masculinos", () => {
    const personagens = [
      {
        id: 1,
        gender: "Male",
      },
      {
        id: 2,
        gender: "Male",
      },
      {
        id: 3,
        gender: "Male",
      },
      {
        id: 4,
        gender: "Female",
      },
      {
        id: 5,
        gender: "Male",
      },
    ];

    const filtrado = filterMale(personagens);

    expect(filtrado).toEqual([
      {
        id: 1,
        gender: "Male",
      },
      {
        id: 2,
        gender: "Male",
      },
      {
        id: 3,
        gender: "Male",
      },
      {
        id: 5,
        gender: "Male",
      }
    ]);
  });

  it("deve filtrar apenas os gêneros indefinidos", () => {
    const personagens = [
      {
        id: 1,
        gender: "Male",
      },
      {
        id: 2,
        gender: "Male",
      },
      {
        id: 7,
        gender: "NA",
      },
      {
        id: 3,
        gender: "Male",
      },
      {
        id: 6,
        gender: "NA",
      },
  
      {
        id: 4,
        gender: "Female",
      },
      {
        id: 5,
        gender: "Male",
      },
    ];

    const filtrado = filterNA(personagens);

    expect(filtrado).toEqual([
      {
        id: 7,
        gender: "NA",
      },
      {
        id: 6,
        gender: "NA",
      },
    ]);
  });
});

describe("Busca filmes pelo título", () => {
  it("deve retornar apenas filmes que contenham a valor 'castle'", () => {
    const data = [
      {
        title: "Only Yesterday",
      },
      {
        title: "Porco Rosso",
      },
      {
        title: "Castle in The Sky",
      },
      {
        title: "The Cat Returns",
      }
    ];
    
    const filtrado = filterMovie(data, "Castle");

    expect(filtrado).toEqual([
      {
        title: "Castle in The Sky",
      }
    ]);
  });

  it("busca deve retornar filme mesmo com diferença entre maiúscula e minúscula", () => {
    const data = [
      {
        title: 'CASTLE IN THE SKY',
      },
    ];

    const filtrado = filterMovie(data, "castle");

    expect(filtrado).toEqual([
      {
        title: "CASTLE IN THE SKY",
      }
    ]);
  });
});

describe("Retorna a porcentagem de personagens femininos", () => {
  it("deve retornar a porcentagem do gênero", () => {
    const data = [
      {
        title: 'Castle in the Sky',
        people: [
            {
                gender: 'Male',
            },
            {
                gender: 'Female',
            }
        ],
      },
      {
        title: 'Porco Rosso',
        people: [
            {
                gender: 'Female',
            },
            {
                gender: 'Female',
            }
        ],
      },
      {
        title: 'The Cat Returns',
        people: [
            {
                gender: 'Male',
            },
            {
                gender: 'Female',
            }
        ],
      },
    ];
    
    const porcentagem = porc(data);

    expect(porcentagem).toBe("66.67");
  });
});