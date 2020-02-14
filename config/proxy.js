const env = process.env.NODE_ENV;
let envPath = ''
env === 'prod' ? envPath = '' : envPath = `-${env}`
module.exports = {
    'uc': {
        'target' : 'http://usercenter'+envPath+'.fenbeijinfu.com'
    },
    'pop': {
        'target' : 'http://merchant'+envPath+'.fenbeijinfu.com'
    }
}