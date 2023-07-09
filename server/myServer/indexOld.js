import express from 'express'; // library to run the server basic function
import { DataTypes, Sequelize } from "sequelize"; //library to manage database

import dbInitialization from "./dbInit.js"
import { mode } from 'process';
const storagePath = "./db.sqlite"
/* const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log("DIRNAME --> " + __dirname) */


const app = express();
app.use(express.json());

async function initServer() {

    const models = await dbInitialization(storagePath); //chiama la funzione presente nel file dbInit.js che inizializza il modello di database e aggiunge i dati necessari

    app.get('/', async(req, res) => {
        res.status(200).send("hello Davide");
    });

    app.get('/people', async(req,res) => {
        const data = await models.Person.findAll();
        res.status(200).json(data)
    })

    app.get('/people/:id', async (req, res) => {
        const data = await models.Person.findOne({
            where: {
                id: req.params.id
            },
            
            include: [
                {
                    model: models.Project
                }
            ]
        })
        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/projects', async(req,res) => {
        const data = await models.Project.findAll();
        res.status(200).json(data)
    })

   
    app.get('/projects/:id', async (req, res) => {
        try {
          const project = await models.Project.findOne({
            where: {
              id: req.params.id,
            },
            include: [
              {
                model: models.Person
              },
              {
                model: models.Area
              }
            ]
          });
      
          if (project) {
            res.status(200).json(project);
          } else {
            res.sendStatus(404);
          }
        } catch (error) {
          console.error(error);
          res.sendStatus(500);
        }
      });
    
      app.get('/bestProjects', async(req,res) => {
        const data = await models.Project.findAll( {
          where: {
            mostRelevant: 1
          }
        } );
        res.status(200).json(data)
      })

    app.get('/areas', async(req,res) => {
        const data = await models.Area.findAll();
        res.status(200).json(data)
    })

    app.get('/areas/:id', async(req, res) => {
      const data = await models.Area.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: models.Project
          }
        ]
      }); 
      if (data) {
        res.status(200).json(data)
      }
      else {
        res.sendStatus(404)
      }
    })

    app.get('/work', async(req,res) => {
        const data = await models.WorkOn.findAll();
        res.status(200).json(data)
    })

}


initServer()
console.log("Server Initialized")


export default fromNodeMiddleware(app)

