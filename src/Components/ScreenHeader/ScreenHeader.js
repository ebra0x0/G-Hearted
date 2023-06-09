import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Keyboard } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
const ScreenHeader = (props) => {
    const { theme } = useSelector((state) => state.user);
    const { arrow, title, component, btns, style } = props;
    const [Buttons, setButtons] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        if (btns) {
            const rndrBtns = btns.map((btn) => {
                if (btn) {
                    return btn;
                }
            });
            setButtons(rndrBtns);
        }
    }, [btns]);

    return (
        <View
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 999,
                width: "100%",
                height: 100,
                paddingHorizontal: 20,
                paddingTop: 30,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: theme ? "#00142f" : "#fff",
                elevation: 5,
                ...style,
            }}
        >
            {arrow && (
                <TouchableOpacity
                    onPress={() => {
                        Keyboard.dismiss();
                        navigation.goBack();
                    }}
                >
                    <Ionicons name="arrow-back" size={30} color={theme ? "#fff" : "#343434"} />
                </TouchableOpacity>
            )}

            {title && (
                <Text
                    style={{
                        flex: 1,
                        marginLeft: 6,
                        fontSize: 30,
                        color: theme ? "#fff" : "#343434",
                        fontWeight: "bold",
                        textAlign: "left",
                    }}
                >
                    {title}
                </Text>
            )}
            {component && component}

            {Buttons && <View style={{ flexDirection: "row", alignItems: "center" }}>{Buttons}</View>}
        </View>
    );
};

export default ScreenHeader;
