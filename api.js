const express = require('express');

const app = express();
const PORT = 8000;
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(express.json());

app.get('/all', async (req, res) => {
   try {
      const [exponential, polynomial, trigonometric, saved] = await Promise.all([
         knex('Exponential').select('*'),
         knex('Polynomial').select('*'),
         knex('Trigonometric').select('*'),
         knex('Saved').select('*')
      ]);

      res.status(200).json({
         Exponential: exponential,
         Polynomial: polynomial,
         Trigonometric: trigonometric,
         Saved: saved
      });
   } catch (err) {
      res.status(500).json({
         message: 'Failed to fetch data.'
      });
   }
});

app.delete('/saved/delete', async (req, res) => {
   try{
      const { functionToDelete } = req.body;

      if (!functionToDelete) {
         return res.status(400).json({
            message: 'Function is required.'
         });
      }

      const deleted = await knex('Saved')
         .where('function', functionToDelete).delete();

      if (deleted === 0) {
         return res.status(404).json({
            message: 'No matching value found.'
         });
      }

      res.status(200).json({
         message: 'Function deleted successfully.', deleted
      });

   } catch (err) {
      res.status(500).json({
         message: 'Failed to delete data.'
      });
   }
})

app.post('/saved/post', async (req, res) => {
   try {
      const { functionToAdd } = req.body;

      if (!functionToAdd) {
         return res.status(400).json({
            message: 'Function is required.'
         });
      }

      const [saved] = await knex('Saved')
         .insert({ function: functionToAdd })
         .returning('*');

      res.json(saved);

      res.status(201).json({
         message: 'Function saved successfully.'
      });

   } catch (err) {
      res.status(500).json({
         message: 'Failed to save function.'
      });
   }
});

app.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
});