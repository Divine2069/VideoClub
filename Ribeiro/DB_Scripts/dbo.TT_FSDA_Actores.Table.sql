USE [Project_EKP01_TrailerFlix]
GO
/****** Object:  Table [dbo].[TT_FSDA_Actores]    Script Date: 10/02/2022 11:15:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TT_FSDA_Actores](
	[Id_TT_FSDA_Actores] [int] IDENTITY(1,1) NOT NULL,
	[Id_Actores] [int] NOT NULL,
	[Id_Filme] [int] NULL,
	[Id_Series] [int] NULL,
	[Id_Documentary] [int] NULL,
	[Id_Anime] [int] NULL,
 CONSTRAINT [PK_TT_FSDA_Actores] PRIMARY KEY CLUSTERED 
(
	[Id_TT_FSDA_Actores] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TT_FSDA_Actores]  WITH CHECK ADD  CONSTRAINT [FK_TT_FSDA_Actores_Actores] FOREIGN KEY([Id_Filme])
REFERENCES [dbo].[Actores] ([Id_Actores])
GO
ALTER TABLE [dbo].[TT_FSDA_Actores] CHECK CONSTRAINT [FK_TT_FSDA_Actores_Actores]
GO
ALTER TABLE [dbo].[TT_FSDA_Actores]  WITH CHECK ADD  CONSTRAINT [FK_TT_FSDA_Actores_Anime] FOREIGN KEY([Id_Filme])
REFERENCES [dbo].[Anime] ([Id_Anime])
GO
ALTER TABLE [dbo].[TT_FSDA_Actores] CHECK CONSTRAINT [FK_TT_FSDA_Actores_Anime]
GO
ALTER TABLE [dbo].[TT_FSDA_Actores]  WITH CHECK ADD  CONSTRAINT [FK_TT_FSDA_Actores_Documentary] FOREIGN KEY([Id_Series])
REFERENCES [dbo].[Documentary] ([Id_Documentary])
GO
ALTER TABLE [dbo].[TT_FSDA_Actores] CHECK CONSTRAINT [FK_TT_FSDA_Actores_Documentary]
GO
ALTER TABLE [dbo].[TT_FSDA_Actores]  WITH CHECK ADD  CONSTRAINT [FK_TT_FSDA_Actores_Filmes] FOREIGN KEY([Id_Filme])
REFERENCES [dbo].[Filmes] ([Id_Filme])
GO
ALTER TABLE [dbo].[TT_FSDA_Actores] CHECK CONSTRAINT [FK_TT_FSDA_Actores_Filmes]
GO
ALTER TABLE [dbo].[TT_FSDA_Actores]  WITH CHECK ADD  CONSTRAINT [FK_TT_FSDA_Actores_Series] FOREIGN KEY([Id_Filme])
REFERENCES [dbo].[Series] ([Id_Serie])
GO
ALTER TABLE [dbo].[TT_FSDA_Actores] CHECK CONSTRAINT [FK_TT_FSDA_Actores_Series]
GO
