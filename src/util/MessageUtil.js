const { showMessage } = require("react-native-flash-message")

const MessageUtil = {
    showSuccess: (description) => {
        showMessage({
            message: "Berhasil",
            description: description,
            type: "success",
            color: "white",
            icon: "success"
        })
    },
    showWarning: (description) => {
        showMessage({
            message: "Warning",
            description: description,
            type: "warning",
            color: "white",
            icon: "warning"
        })
    },
    showFailed: (description) => {
        showMessage({
            message: "Failed",
            description: description,
            type: "danger",
            color: "white",
            icon: "danger"
        })
    },
}

export default MessageUtil;