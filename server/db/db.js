import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.b5lr9.mongodb.net/?retryWrites=true&w=majority',
 { useNewUrlParser: true, useCreateIndex: true });