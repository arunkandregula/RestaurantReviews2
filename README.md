# RestaurantReviews2

# Previous Steps:

1. Scaffolded a brand new react-native project.

2. Implemented a simple live search for restaurants from a server.

   - Dont forget to run json-server -p 8080 src/tests/fixtures/restaurants.json to serve the mock data for the list of restaurants.
   - Doesnt YET support scrolling. Will be implemented in next step.

3. Implemented the list using FlatList, which is memory performant.

4. Turn Last column <Text>Info<Text> to button.

- Button will turn it into button
  - One small issue is the flex:1 we gave to styles.edges may not be enough to fit a button so info may get wrapped. To fix it we may add minWidth=50
  - But Button element dont have those many config options.

5. Introducing Touchable buttons.
   Button component just works. But customizability is limited. All we could customize is color of the text. Thats it.
   So, lets replace it with fully customizable Touchable element. We have 3 :
   -TouchableOpacity
   -TouchableWithoutFeedback ( styles wont be applied as this is meant to wrap any other component. Eg. image.)
   -TouchableHighlight ( To customize the highlight color, we do it using attribute underlayColor="#0066CC" )

6. Replace fetch with axios.

- Fetch may have problems with how it handles cookies.
- Axios parses the results for us as json. ( With fetch, we have to parse results to json by ourselves. Its an extra step with fetch. )

# Current Step:

7. Display local images in react-native

- Lets create package.json with simple contents:

```json
{
  "name": "images"
}
```

so that we can import images using absolute import path.
Eg.

```js
import image1 from "images";
```

- When we use

```
import PizzaImage from 'images/pizza.png'
```

react-native automatically detect the proper file to use
for the current device. It could be

1. images/pizza.png OR
2. images/pizza@2x.png OR
3. images/pizza@3x.png
