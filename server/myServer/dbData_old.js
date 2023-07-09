export default async (models) => {

    const personModel = [
        {
            taxCode: "RSSMRA",
            name: "Mario",
            surname: "Rossi"
        },
        {
            taxCode: "VRDLGU",
            name: "Luigi",
            surname: "Verdi"
        },
        {
            taxCode: "RMNDVD",
            name: "Davide",
            surname: "Remondina"
        },
        {
            taxCode: "SNSGCM",
            name: "Giacomo",
            surname: "Sansoni"
        },
        {
            taxCode: "BRRLSA",
            name: "Elisa",
            surname: "Borrini"
        },
        {
            taxCode: "NVLNDR",
            name: "Andrea",
            surname: "Novelli"
        }
    ]

    const person0 = await models.Person.create(personModel[0])
    const person1 = await models.Person.create(personModel[1])
    const person2 = await models.Person.create(personModel[2])
    const person3 = await models.Person.create(personModel[3])
    const person4 = await models.Person.create(personModel[4])
    const person5 = await models.Person.create(personModel[5])


/*     const areaModel
    const projectModel
    const workOnModel */

}
