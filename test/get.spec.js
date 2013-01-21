var get = require('../lib/get');

var configDirGet = __dirname + '/dummy/get';

describe('get', function() {

    describe('.loadConfigurations [integration]', function() {

        it('should return configurations for this method', function() {

            var configs = get.loadConfigurations(configDirGet);

            configs.should.have.length(1);
            configs[0].should.have.property('path');
            configs[0].should.have.property('template');

        });
    });
});
