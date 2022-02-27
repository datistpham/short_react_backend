export function listVideo(sequelize, DataTypes) {
    return sequelize.define('short', {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_video: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        source: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        tag: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        author_name: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        author_avatar: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        number_of_like: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        number_of_dislike: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        number_of_comment: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        number_of_view: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        imagesnapshot: {
            type: DataTypes.STRING(1000),
            allowNull: false    
        }
    })
}