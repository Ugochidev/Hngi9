// require dependencies
import  mongoose ,{ ConnectOptions }from "mongoose";
import environment from "./environment";

class Database { 


  async connect(){
    try {
    await mongoose.connect(environment.dburl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    } as ConnectOptions );
    console.log("Database Connected");
  } catch (error) {
    throw new Error("Database not Connected");

  }
}
}

export default  Database;
