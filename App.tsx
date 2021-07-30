import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
    const [taskList, setTaskList] = useState(Array<{ key: string, value: string }>())
    const [modalState, setModalState] = useState(false)

    const addTaskHandler = (taskTitle: string) => {
        if (taskTitle.trim() != "") {
            let newKey: number
            try {
                newKey = Number(taskList[taskList.length - 1].key) + 1
            } catch (e) {
                newKey = 1
            }
            setTaskList(taskList => [...taskList, {key: `${newKey}`, value: taskTitle.trim()}])
        }
    }

    const deleteTaskHandler = (taskToRemoveKey: string) => {
        setTaskList(taskList => {
            return taskList.filter(tasks => tasks.key !== taskToRemoveKey)
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Task list</Text>
            <Button title="Add new task" onPress={() => setModalState(true)}/>
            <TaskInput visibility={modalState} onAddTask={addTaskHandler}/>
            <FlatList data={taskList}
                      renderItem={task =>
                          <TaskItem taskId={task.item.key}
                                    taskTitle={task.item.value}
                                    onDeleteTask={deleteTaskHandler}
                          />
                      }/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 40
    },
    title: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
    },
    inputArea: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textInput: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 10,
        width: "80%"
    },
});
