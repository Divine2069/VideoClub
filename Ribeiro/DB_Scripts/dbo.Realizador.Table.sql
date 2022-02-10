USE [Project_EKP01_TrailerFlix]
GO
/****** Object:  Table [dbo].[Realizador]    Script Date: 10/02/2022 11:15:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Realizador](
	[Id_Director] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Last_Name] [nvarchar](50) NULL,
	[Age] [int] NOT NULL,
	[Sex] [char](1) NOT NULL,
	[Nationality] [nvarchar](50) NOT NULL,
	[Movies] [nvarchar](500) NULL,
 CONSTRAINT [PK_Realizador] PRIMARY KEY CLUSTERED 
(
	[Id_Director] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Realizador] ON 

INSERT [dbo].[Realizador] ([Id_Director], [Name], [Last_Name], [Age], [Sex], [Nationality], [Movies]) VALUES (1, N'Ridley  ', N'Scott', 84, N'M', N'UK', N'House of Gucci')
INSERT [dbo].[Realizador] ([Id_Director], [Name], [Last_Name], [Age], [Sex], [Nationality], [Movies]) VALUES (2, N'Destin Daniel', N' Cretton', 42, N'M', N'USA', N'Shang-Chi and the Legend of the Ten Rings')
SET IDENTITY_INSERT [dbo].[Realizador] OFF
GO
