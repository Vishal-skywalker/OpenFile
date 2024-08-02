import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import * as WebBrowser from 'expo-web-browser'
import * as FileSystem from 'expo-file-system';
import StaticServer from '@dr.pogodin/react-native-static-server'


const fileName = 'myfile'; //whatever you want to call your file
// const filePath = `${Dirs.DocumentDir}/${fileName}`;
const htmlData = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Open File Test</title>
</head>
<body>
    <h1>Testing file open</h1>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo officiis, praesentium nulla reprehenderit ducimus, nihil modi ipsa eaque maiores molestiae repellat aut, eius incidunt? Nostrum sit autem dicta magni dolorem accusamus neque corrupti veniam. Eius atque dolores impedit, non ad, natus provident deserunt minus voluptas commodi ratione magni, similique fuga!
</body>
</html>`;


export default function HomeScreen() {
  const [serverUrl, setServerUrl] = useState(null);

  useEffect(async () => {
    const fileUri = FileSystem.documentDirectory + 'www/myfile.html';
    const rootPath = `${FileSystem.documentDirectory}www`;
    console.log('fileUri :>> ', fileUri);
    console.log('rootPath :>> ', rootPath);
    try {
      // Write the HTML content to a file
      // await FileSystem.writeAsStringAsync(fileUri, htmlData);
      // const staticServer = new StaticServer(8080, F, { localOnly: true });
      // staticServer.start().then((url) => {
      //   console.log(`Serving at URL: ${url}`);
      //   setUrl(url);
      // });
      setServerUrl(fileUri);
    } catch (error) {
      console.error('Error writing file:', error);
    }
  },
    []);
  async function openLink() {
    await WebBrowser.openBrowserAsync(serverUrl);
  }
  return (
    <View style={styles.loginButtonSection}>
      <Pressable style={styles.button} onPress={openLink}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </View>
  );
}

// const StorageAccessFramework = FileSystem.StorageAccessFramework;



const styles = StyleSheet.create({
  loginButtonSection: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'le'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    width: '70%',
    backgroundColor: '#F64888',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
