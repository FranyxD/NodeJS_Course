//console.log(process.env)

const { SHELL, HOMEBREW_PREFIX, TERM } = process.env;

//console.table({SHELL, HOMEBREW_PREFIX, TERM});

const characters = ["flash", "superman", "green lantern", "batman"];

const [, , ,batman] = characters;

//console.log(batman)
