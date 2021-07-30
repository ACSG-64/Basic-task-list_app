import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface Props {
    taskId: string
    taskTitle: string
    onDeleteTask: (taskToRemoveKey: string) => void
}

const TaskItem = ({taskId, taskTitle, onDeleteTask}: Props) => {
    return (
        <TouchableOpacity onLongPress={() => onDeleteTask(taskId)}>
            <View style={styles.taskItem}>
                <Text>{taskTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    taskItem: {
        paddingVertical: 10,
        paddingHorizontal: 2,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    }
});

export default TaskItem
