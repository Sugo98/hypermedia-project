import { DataTypes, Sequelize } from "sequelize"

import dataInitialization from "./dbData.js"

export default async (storagePath) => {
    const db = new Sequelize({
        dialect: "sqlite",
        storage: storagePath
    })
    const models = {}

    //verify if the connesction with the dataBase went ok!
    try {
        await db.authenticate();
        console.log("database connected succesfully");
      } catch {
        console.log("Something went wrong")
    }

    //define table people
    models.Person = db.define('person', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    //define table areas
    models.Area = db.define('area', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    //define table projects
    models.Project = db.define('project', {
        
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        areaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        supervisorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mostRelevant: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    })

    //define the junction table Work
    models.WorkOn = db.define('workOn',{},{freezeTableName: true})

    //define association
    //Each project have a supervisor
    models.Person.hasMany(models.Project, {foreignKey: 'supervisorId'});
    models.Project.belongsTo(models.Person, { foreignKey: 'supervisorId', as: 'supervisor' });
    //Each project belongs to an Area
    models.Area.hasMany(models.Project, {foreignKey: 'areaId'})
    models.Project.belongsTo(models.Area);
    //On each project work different people
    models.Person.belongsToMany(models.Project, { through: models.WorkOn });
    models.Project.belongsToMany(models.Person, { through: models.WorkOn });

    //models.Project.hasMany(models.Person, {through: models.WorkOn})
    
    

    try {
        await db.sync();
        console.log("database sync succesfully");
      } catch {
        console.error("error during database sync")
    }

    //await dataInitialization(models);

    return models
}