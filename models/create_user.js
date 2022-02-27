export function createUser(sequelize, DataTypes) {
    return sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_token: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        username: {
            type:  DataTypes.STRING(1000),
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        video_liked: {
            type: DataTypes.TEXT(60000),
            allowNull: true 
        },
        comment_liked: {
            type: DataTypes.TEXT(60000),
            allowNull: true
        }
    })
}