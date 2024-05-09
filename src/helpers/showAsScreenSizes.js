export function showAsScreenSizes(sizes) {
    let screenSizes = "";

    for(let i = 0; i < sizes.length; i++) {
        screenSizes = screenSizes + sizes[i] + " inches (" + (sizes[i] * 2.54) + " cm) | "
    }

    return screenSizes.substring(0, screenSizes.length - 2);
}