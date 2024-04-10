#Makefile
instal: # The command to install dependencies from a lockfile is:
	npm ci
brain-games: # start app
	node bin/brain-games.js

publish: # publish package 
	npm publish --dry-run

lint: # run linter
	npx eslint .
