USE [Project_EKP01_TrailerFlix]
GO
/****** Object:  Table [dbo].[Documentary]    Script Date: 10/02/2022 11:15:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Documentary](
	[Id_Documentary] [int] IDENTITY(1,1) NOT NULL,
	[Title_Name] [nvarchar](50) NOT NULL,
	[Language] [nvarchar](50) NOT NULL,
	[Released_Date] [date] NOT NULL,
	[Rating] [numeric](10, 0) NULL,
	[Time] [nchar](10) NULL,
	[Summary] [nvarchar](500) NULL,
	[Link_Trailer] [nvarchar](500) NULL,
	[Cover] [nvarchar](100) NULL,
 CONSTRAINT [PK_Documentary] PRIMARY KEY CLUSTERED 
(
	[Id_Documentary] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Documentary] ON 

INSERT [dbo].[Documentary] ([Id_Documentary], [Title_Name], [Language], [Released_Date], [Rating], [Time], [Summary], [Link_Trailer], [Cover]) VALUES (1, N'Jackass Forever', N'English', CAST(N'2022-02-04' AS Date), CAST(8 AS Numeric(10, 0)), N'01h36m    ', N'After 11 years, the Jackass crew is back for their final crusade.', N'https://www.youtube.com/embed/FNq-QT2Jpng', N'Jackass Forever_cover.jpeg')
INSERT [dbo].[Documentary] ([Id_Documentary], [Title_Name], [Language], [Released_Date], [Rating], [Time], [Summary], [Link_Trailer], [Cover]) VALUES (2, N'The Tinder Swindler', N'English', CAST(N'2022-02-02' AS Date), CAST(7 AS Numeric(10, 0)), N'01h54m    ', N'Swipe, swipe, swipe, It''s not easy to find love online, so when Cecilie matches with a handsome billionaire playboy, she can''t quite believe it when he turns out to be the man of her dreams. But dreams aren''t reality and by the time she discovers this international businessman isn''t who he says he is, it''s too late. He''s taken her for everything. Where this fairytale ends, a revenge thriller begins.', N'https://www.youtube.com/embed/_R3LWM_Vt70', N'The Tinder Swindler_cover.jpeg')
INSERT [dbo].[Documentary] ([Id_Documentary], [Title_Name], [Language], [Released_Date], [Rating], [Time], [Summary], [Link_Trailer], [Cover]) VALUES (3, N'The Puppet Master Hunting the Ultimate Conman', N'English', CAST(N'2022-01-19' AS Date), CAST(7 AS Numeric(10, 0)), N'02h07m    ', N'From the acclaimed filmmakers behind The Imposter, this three-part series tells the jaw-dropping story of one of the world''s most audacious conmen who was convicted in 2005 for stealing fortunes and destroying multiple lives. But now, in an incredible twist, the story reaches into the present day, with a desperate family who fear for their mother''s safety.', N'https://www.youtube.com/embed/vsVjVu31KL0', N'The Puppet Master Hunting the Ultimate Conman_cover.jpeg')
INSERT [dbo].[Documentary] ([Id_Documentary], [Title_Name], [Language], [Released_Date], [Rating], [Time], [Summary], [Link_Trailer], [Cover]) VALUES (4, N'Janet Jackson', N'English', CAST(N'2022-01-28' AS Date), CAST(7 AS Numeric(10, 0)), N'02h48m    ', N'An intimate and unfiltered look at the untold story of Janet Jackson filmed over the span of three years featuring archival footage, never before seen home videos and star-studded interviews.', N'https://www.youtube.com/embed/yPHFcDHJYTU', N'Janet Jackson_cover.jpeg')
INSERT [dbo].[Documentary] ([Id_Documentary], [Title_Name], [Language], [Released_Date], [Rating], [Time], [Summary], [Link_Trailer], [Cover]) VALUES (5, N'The Beatles Get Back', N'English', CAST(N'2021-11-25' AS Date), CAST(9 AS Numeric(10, 0)), N'07h48m    ', N'Documentary about the music group The Beatles featuring in-studio footage that was shot in early 1969 for the 1970 feature film ''Let It Be.''', N'https://www.youtube.com/embed/Auta2lagtw4', N'The Beatles Get Back_cover.jpeg')
INSERT [dbo].[Documentary] ([Id_Documentary], [Title_Name], [Language], [Released_Date], [Rating], [Time], [Summary], [Link_Trailer], [Cover]) VALUES (6, N'Harry Potter 20th Anniversary Return to Hogwarts', N'English', CAST(N'2022-01-01' AS Date), CAST(8 AS Numeric(10, 0)), N'01h42m    ', N'Cast members from all "Harry Potter" films reunite in a retrospective special to celebrate the anniversary of the first film, including interviews and cast conversations.', N'https://www.youtube.com/embed/fFGS4zZWGoA', N'Harry Potter 20th Anniversary Return to Hogwarts_cover.jpeg')
INSERT [dbo].[Documentary] ([Id_Documentary], [Title_Name], [Language], [Released_Date], [Rating], [Time], [Summary], [Link_Trailer], [Cover]) VALUES (7, N'Neymar The Perfect Chaos', N'Portuguese', CAST(N'2022-01-25' AS Date), CAST(6 AS Numeric(10, 0)), N'02h44m    ', N'Beloved worldwide but also a lightning rod for critics, Neymar shares the highs and lows of his personal life and brilliant football career.', N'https://www.youtube.com/embed/dpL5zS-PngE', N'Neymar The Perfect Chaos_cover.jpeg')
INSERT [dbo].[Documentary] ([Id_Documentary], [Title_Name], [Language], [Released_Date], [Rating], [Time], [Summary], [Link_Trailer], [Cover]) VALUES (8, N'Don''t Fuck with Cats Hunting an Internet Killer', N'English', CAST(N'2019-12-18' AS Date), CAST(8 AS Numeric(10, 0)), N'03h07m    ', N'A group of online justice seekers track down a guy who posted a video of himself killing kittens.', N'https://www.youtube.com/embed/KHfWklPzH-Y', N'Don''t Fuck with Cats Hunting an Internet Killer_cover')
INSERT [dbo].[Documentary] ([Id_Documentary], [Title_Name], [Language], [Released_Date], [Rating], [Time], [Summary], [Link_Trailer], [Cover]) VALUES (9, N'Formula 1 Drive to Survive', N'English, Arabic', CAST(N'2019-03-08' AS Date), CAST(9 AS Numeric(10, 0)), N'20h00m    ', N'Docuseries following the FIA Formula One World Championship across multiple seasons.', N'https://www.youtube.com/embed/wtJPe1ksS6E', N'Formula 1 Drive to Survive_cover.jpeg')
INSERT [dbo].[Documentary] ([Id_Documentary], [Title_Name], [Language], [Released_Date], [Rating], [Time], [Summary], [Link_Trailer], [Cover]) VALUES (10, N'Cosmos A Spacetime Odyssey', N'English', CAST(N'2014-03-09' AS Date), CAST(9 AS Numeric(10, 0)), N'09h17m    ', N'Join the heroic quest for knowledge as we set course for the stars with the twenty-first century reboot of Cosmos. Hosted by world-renowned astrophysicist Neil deGrasse Tyson, this thirteen-part ground-breaking series will venture to new worlds, trace our roots back to the hearts of ancient stars, and travel across the universe for a vision of the cosmos on the grandest scale.', N'https://www.youtube.com/embed/_erVOAbz420', N'Cosmos A Spacetime Odyssey_cover.jpeg')
SET IDENTITY_INSERT [dbo].[Documentary] OFF
GO
