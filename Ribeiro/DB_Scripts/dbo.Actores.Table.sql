USE [Project_EKP01_TrailerFlix]
GO
/****** Object:  Table [dbo].[Actores]    Script Date: 10/02/2022 11:15:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Actores](
	[Id_Actores] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Last_Name] [nvarchar](50) NOT NULL,
	[Age] [int] NULL,
	[Sex] [char](1) NOT NULL,
	[Nationality] [nvarchar](50) NULL,
	[NickName] [nvarchar](50) NULL,
	[Movies] [nvarchar](50) NULL,
 CONSTRAINT [PK_Actores] PRIMARY KEY CLUSTERED 
(
	[Id_Actores] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Actores] ON 

INSERT [dbo].[Actores] ([Id_Actores], [Name], [Last_Name], [Age], [Sex], [Nationality], [NickName], [Movies]) VALUES (1, N'Lady', N'Gaga', 35, N'F', N'USA', NULL, N'House of Gucci')
INSERT [dbo].[Actores] ([Id_Actores], [Name], [Last_Name], [Age], [Sex], [Nationality], [NickName], [Movies]) VALUES (2, N'Adam', N'Driver', 38, N'M', N'USA', NULL, N'House of Gucci')
INSERT [dbo].[Actores] ([Id_Actores], [Name], [Last_Name], [Age], [Sex], [Nationality], [NickName], [Movies]) VALUES (5, N'Al', N'Pacino', 81, N'M', N'USA', N'Scarface', N'House of Gucci')
INSERT [dbo].[Actores] ([Id_Actores], [Name], [Last_Name], [Age], [Sex], [Nationality], [NickName], [Movies]) VALUES (6, N'Jeremy', N'Irons', 73, N'M', N'UK', NULL, N'House of Gucci')
INSERT [dbo].[Actores] ([Id_Actores], [Name], [Last_Name], [Age], [Sex], [Nationality], [NickName], [Movies]) VALUES (7, N'Jared ', N'Leto', 51, N'M', N'USA', NULL, N'House of Gucci')
INSERT [dbo].[Actores] ([Id_Actores], [Name], [Last_Name], [Age], [Sex], [Nationality], [NickName], [Movies]) VALUES (8, N'Salma ', N'Hayek', 55, N'F', N'MEX', NULL, N'House of Gucci')
SET IDENTITY_INSERT [dbo].[Actores] OFF
GO
