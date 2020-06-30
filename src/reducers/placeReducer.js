const initState = {
  places: [
    {
      id: "1",
      name: "Apartment A1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      facilities: ["gym", "swimming pool"],
      type: "apartment",
      images: {
        primary: "https://source.unsplash.com/R-LK3sqLiBw",
        others: [
          "https://source.unsplash.com/nWX4pKwzLoE",
          "https://source.unsplash.com/X5BWooeO4Cw",
        ],
      },
      address: {
        street:
          "Epicentrum, Jl. H. R. Rasuna Said No.2, RT.16/RW.5, Karet Kuningan, Setia Budi",
        city: "South Jakarta",
        country: "Indonesia",
        latitude: "-6.2155124",
        longitude: "106.8160708",
      },
    },
    {
      id: "2",
      name: "Office B2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      facilities: ["meeting room", "bar"],
      type: "office",
      images: {
        primary: "https://source.unsplash.com/eHD8Y1Znfpk",
        others: [
          "https://source.unsplash.com/U2BI3GMnSSE",
          "https://source.unsplash.com/wawEfYdpkag",
        ],
      },
      address: {
        street:
          "Tokopedia Tower Ciputra World 2, Jl. Prof. DR. Satrio No.Kav. 11, RT.3/RW.3, Karet Semanggi",
        city: "South Jakarta",
        country: "Indonesia",
        latitude: "-6.2213163",
        longitude: "106.8172558",
      },
    },
    {
      id: "3",
      name: "Apartment C3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      facilities: ["laundry"],
      type: "apartment",
      images: {
        primary: "https://source.unsplash.com/Wp7t4cWN-68",
        others: [
          "https://source.unsplash.com/MP0bgaS_d1c",
          "https://source.unsplash.com/JIUjvqe2ZHg",
        ],
      },
      address: {
        street:
          "Jl. Pedurenan Mesjid Raya No.9, RT.10/RW.4, Kuningan, Karet Kuningan, Kecamatan Setiabudi",
        city: "South Jakarta",
        country: "Indonesia",
        latitude: "-6.2241411",
        longitude: "106.8304263",
      },
    },
    {
      id: "4",
      name: "Office D4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      facilities: ["cafe", "smoking room"],
      type: "office",
      images: {
        primary: "https://source.unsplash.com/aKij95Mmus8",
        others: [
          "https://source.unsplash.com/FSFfEQkd1sc",
          "https://source.unsplash.com/rRiAzFkJPMo",
        ],
      },
      address: {
        street:
          "Blok Haji Musanif, Kecamatan Setiabudi, Jl. Gatot Subroto No.13, RT.1/RW.4, Karet Semanggi",
        city: "South Jakarta",
        country: "Indonesia",
        latitude: "-6.2209795",
        longitude: "106.8140345",
      },
    },
    {
      id: "5",
      name: "Apartment E5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      facilities: ["parking"],
      type: "apartment",
      images: {
        primary: "https://source.unsplash.com/gKjLLN1T8HQ",
        others: [
          "https://source.unsplash.com/UV81E0oXXWQ",
          "https://source.unsplash.com/Vra_DPrrBlE",
        ],
      },
      address: {
        street:
          "Jl. DR. Ide Anak Agung Gde Agung No.1, RW.2, Kuningan, Kuningan Tim., Setia Budi",
        city: "South Jakarta",
        country: "Indonesia",
        latitude: "-6.2284926",
        longitude: "106.8251048",
      },
    },
    {
      id: "6",
      name: "Office F6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      facilities: ["meeting room", "bar"],
      type: "office",
      images: {
        primary: "https://source.unsplash.com/PhYq704ffdA",
        others: [
          "https://source.unsplash.com/_-KLkj7on_c",
          "https://source.unsplash.com/9uX5cX1l3bw",
        ],
      },
      address: {
        street:
          "Jl. Jend. Sudirman No.Kav 48A, RT.5/RW.4, Karet Semanggi, Setia Budi",
        city: "South Jakarta",
        country: "Indonesia",
        latitude: "-6.2202675",
        longitude: "106.816379",
      },
    },
    {
      id: "7",
      name: "Apartment G7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      facilities: ["gym"],
      type: "apartment",
      images: {
        primary: "https://source.unsplash.com/koH7IVuwRLw",
        others: [
          "https://source.unsplash.com/gREquCUXQLI",
          "https://source.unsplash.com/MP0bgaS_d1c",
        ],
      },
      address: {
        street:
          "Jl. DR. Ide Anak Agung Gde Agung No.1, RW.2, Kuningan, Kuningan Tim., Setia Budi",
        city: "South Jakarta",
        country: "Indonesia",
        latitude: "-6.2374212",
        longitude: "106.8231214",
      },
    },
    {
      id: "8",
      name: "Office H8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      facilities: ["gym", "cafe"],
      type: "office",
      images: {
        primary: "https://source.unsplash.com/iI4sR_nkkbc",
        others: [
          "https://source.unsplash.com/wgivdx9dBdQ",
          "https://source.unsplash.com/DyFjxmHt3Es",
        ],
      },
      address: {
        street:
          "Tifa Arum Realty, Jl. Kuningan Bar. 1 No.26, RT.6/RW.1, Kuningan Bar., Kec. Mampang Prpt",
        city: "South Jakarta",
        country: "Indonesia",
        latitude: "-6.234824",
        longitude: "106.8196039",
      },
    },
  ],
};

const placeReducer = (state = initState, action) => {
  return state;
};

export default placeReducer;
