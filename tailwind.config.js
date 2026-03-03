/** @type {import('tailwindcss').Config} */
module.exports = {
    "content": [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    "theme": {
        "extend": {
            "colors": {
                "gray": {
                    "100": "#1f1d1d",
                    "200": "#1c1917",
                    "300": "rgba(31, 29, 29, 0.5)"
                },
                "darkslategray": {
                    "100": "#494a4d",
                    "200": "#38322e"
                },
                "white": "#fff",
                "darkorange": {
                    "DEFAULT": "#fc750b",
                    "100": "#fc750c",
                    "200": "#fc750b"
                },
                "aliceblue": "#f2f7fa",
                "deepskyblue": "#28acff",
                "silver": "#c5beba"
            },
            "fontFamily": {
                "brisbane": ["Brisbane", "Lora", "serif"],
                "satoshi": ["Satoshi", "sans-serif"],
                "tomboy-lp-bold": ["Tomboy LP Bold"]
            },
            "fontSize": {
                "num-24": "24px"
            }
        }
    },
    "corePlugins": {
        "preflight": false
    }
}
