dev:
	cd scripts && npm run fetch_project_data
	cd ..
	hugo server

build:
	cd scripts && npm run fetch_project_data
	cd ..
	hugo
