build_dev:
		  npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
build_prod:
			cp ./dist/output.css ./style.css
			css-minify -f style.css
