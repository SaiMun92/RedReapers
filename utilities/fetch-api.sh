#!/usr/bin/bash


'''
Bash Script to copy over API creds after a git clone
'''

print("Copying over API keys..")
cp ../RedReaperKeys/service-config.js ./server
print "Successfully copied over API keys"