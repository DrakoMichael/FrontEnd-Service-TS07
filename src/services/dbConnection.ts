

//instance with singleton to prevent multiple connections in a session
//(i try, srry if it is not the best way, but it works)
export class DbConnection {

    private static instance: DbConnection;

    private constructor() {
        DbConnection.getInstance();
    }

    public static getInstance(): DbConnection {
        if (!DbConnection.instance) {
            DbConnection.instance = new DbConnection();
        }
        return DbConnection.instance;
    }

}