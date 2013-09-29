import "console.jsx";
import "express.jsx";

class _Main {
    static function main(argv : string[]) : void
    {
        var app = express.create();
        app.get('/', function (req : Request, res : Response) : void {
            res.send('hello world');
        });

        console.log("running at port 3000");
        app.listen(3000);
    }
}
