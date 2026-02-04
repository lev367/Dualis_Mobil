import {View, Text, Image, StyleSheet} from 'react-native';

export default function SimpleListItem({title, subtitle, imageUrl}) {
    return (
        <View style={styles.container}>
            <Image 
                source={{uri: imageUrl || "https://via.placeholder.com/48"}}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        backgroundColor: "#fff",
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
    },
    subtitle: {
        fontSize: 13,
        color: "#666",
    },
});