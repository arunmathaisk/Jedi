import os,sys

n = len(sys.argv)

mode = str(sys.argv[1])
print(mode)

file_or_hash = str(sys.argv[2])

def genurl():
    gateway1 = 'https://ipfs.io/ipfs/'+ file_or_hash
    gateway2 = 'https://cloudflare-ipfs.com/ipfs/'+ file_or_hash
    gateway3 = 'https://ipfs.fleek.co/ipfs/' + file_or_hash
    print(gateway1 + '\n' + gateway2 + '\n' + gateway3)    

if mode=='add':
    comd = 'curl -X POST -F file=@'+file_or_hash+' '+ '"http://127.0.0.1:5001/api/v0/add"'
    result = os.popen(comd)
    print(result.read())

if mode=='cat':
    comd = 'curl -X POST' + ' '+ '"http://127.0.0.1:5001/api/v0/cat?arg={}"'.format(file_or_hash)
    result = os.popen(comd)
    print(result.read())
    print("Here are the generated IPFS GATEWAY Urls")
    genurl()

