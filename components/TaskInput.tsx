import React, {useState} from 'react'
import {Button, Modal, StyleSheet, TextInput, View} from "react-native";

interface Props {
    visibility: boolean
    onAddTask: (taskTitle: string) => void
}

const TaskInput = ({visibility, onAddTask}: Props) => {
    const [enteredTask, setEnteredTask] = useState("")
    const [modalState, setModalState] = useState(visibility)

    const taskInputHandler = (task: string) => setEnteredTask(task)

    const addTaskHandler = () => {
        onAddTask(enteredTask)
        setEnteredTask("")
        closeModal()
    }

    const closeModal = () => setModalState(false)

    return (
        <Modal visible={modalState} animationType="slide">
            <View style={styles.inputArea}>
                <TextInput style={styles.textInput}
                           placeholder="Write a task" value={enteredTask}
                           onChangeText={taskInputHandler}/>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addTaskHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={closeModal} color="red"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10,
        width: "80%"
    },
    buttonsContainer: {
        width: "60%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        width: "40%"
    }
});


export default TaskInput
