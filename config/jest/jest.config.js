module.exports = {
	"moduleFileExtensions": [
		"ts",
		"js"
	],
	"transform": {
		"^.+\\.ts$": "ts-jest"
	},
	"globals": {
		"ts-jest": {
			"tsConfig": "./config/typescript/jest.tsconfig.json"
		}
	},
}