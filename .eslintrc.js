export default {
    "extends": ["standard", "standard-react"],
    "plugins": "react",
    "ecmaFeatures": {
        "jsx": true
    },
    "rules": {
		"semi": ["error", "always"],
		"indent": ["error", "tab"],
        "no-tabs": "off",
        "react/jsx-indent": ["error", "tab"]
    }
};