let assert = require("assert");

let File = function (args) {
    assert.ok(args.name, "File name is required");

    let file = {};
    file.name = args.name;
    file.extension = args.extension;
    file.type = args.type;
    file.creationDate = args.creationDate;

    return file;
};

module.exports = File;